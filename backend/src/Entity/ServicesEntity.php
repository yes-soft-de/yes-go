<?php

namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\ServiceEntityRepository")
 */
class ServicesEntity
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $name;

    /**
     * @ORM\Column(type="decimal", precision=2, scale=2, nullable=true)
     */
    private $priceForOneHour;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\ServiceEmployeeEntity", mappedBy="service")
     */
    private $employeeService;

    public function __construct()
    {
        $this->employeeService = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): self
    {
        $this->name = $name;

        return $this;
    }

    public function getPriceForOneHour(): ?string
    {
        return $this->priceForOneHour;
    }

    public function setPriceForOneHour(?string $priceForOneHour): self
    {
        $this->priceForOneHour = $priceForOneHour;

        return $this;
    }

    /**
     * @return Collection|ServiceEmployeeEntity[]
     */
    public function getEmployeeService(): Collection
    {
        return $this->employeeService;
    }

    public function addEmployeeService(ServiceEmployeeEntity $employeeService): self
    {
        if (!$this->employeeService->contains($employeeService)) {
            $this->employeeService[] = $employeeService;
            $employeeService->setService($this);
        }

        return $this;
    }

    public function removeEmployeeService(ServiceEmployeeEntity $employeeService): self
    {
        if ($this->employeeService->contains($employeeService)) {
            $this->employeeService->removeElement($employeeService);
            // set the owning side to null (unless already changed)
            if ($employeeService->getService() === $this) {
                $employeeService->setService(null);
            }
        }

        return $this;
    }
}
