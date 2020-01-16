<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\ProjectEmployeeEntityRepository")
 */
class ProjectEmployeeEntity
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\ProjectEntity", inversedBy="projectsEmployee")
     * @ORM\JoinColumn(nullable=false)
     */
    private $project;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\EmployeeEntity", inversedBy="employeeProjects")
     * @ORM\JoinColumn(nullable=false)
     */
    private $employee;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $details;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getProject(): ?ProjectEntity
    {
        return $this->project;
    }

    public function setProject(?ProjectEntity $project): self
    {
        $this->project = $project;

        return $this;
    }

    public function getEmployee(): ?EmployeeEntity
    {
        return $this->employee;
    }

    public function setEmployee(?EmployeeEntity $employee): self
    {
        $this->employee = $employee;

        return $this;
    }

    public function getDetails(): ?string
    {
        return $this->details;
    }

    public function setDetails(?string $details): self
    {
        $this->details = $details;

        return $this;
    }
}
