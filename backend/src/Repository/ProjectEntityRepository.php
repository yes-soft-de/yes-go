<?php

namespace App\Repository;

use App\Entity\ProjectEntity;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;

/**
 * @method ProjectEntity|null find($id, $lockMode = null, $lockVersion = null)
 * @method ProjectEntity|null findOneBy(array $criteria, array $orderBy = null)
 * @method ProjectEntity[]    findAll()
 * @method ProjectEntity[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class ProjectEntityRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, ProjectEntity::class);
    }

    // /**
    //  * @return ProjectEntity[] Returns an array of ProjectEntity objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('p')
            ->andWhere('p.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('p.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */


    public function findProjectById($id): ?ProjectEntity
    {
        return $this->createQueryBuilder('project')
            ->andWhere('project.id = :id')
            ->setParameter('id', $id)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }

}
